const product = {
    props: ['product', 'img'],
    template: `
                <li class="products__item">
                    <div class="products__item-container">
                        <img :src="img" alt="Some img">
                        <button class="products__item-button" type="button" @click="$emit('add-product', product)">Add to cart</button>
                    </div>
                    <h3 class="products__item-title">{{product.product_name}}</h3>
                    <p class="products__item-text">Known for her sculptural
                        takes on traditional tailoring, Australian
                        arbiter of cool Kym Ellery teams
                        up with Moda Operandi.</p>
                    <p class="products__item-price">{{product.price}} &#8381;</p>
                </li>
              `
};

const products = {
    data() {
        return {
            filtered: [],
            products: [],
        }
    },
    components: {
        'product': product
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    item.img = `img/products/${item.id_product}.jpg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
                <section class="products container">
                    <h2 class="products__title">Fetured Items</h2>
                    <p class="products__sub-title">Shop for items based on what we
                     featured in this week</p>
                    <ul class="products__list">
                        <product v-for="item of filtered"  
                            :key="item.id_product"
                            :img="item.img"
                            :product="item"
                            @add-product="$parent.$refs.cart.addProduct"></product>
                    </ul>
               </section>
              `
};
export default products