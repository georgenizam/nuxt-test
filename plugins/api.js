import Product from '@/api/product'
import Review from '@/api/review'

export default function ({ $axios }, inject) {
  $axios.setBaseURL(process.env.API_URL)

  const factories = {
    product: Product($axios),
    review: Review($axios)
  };

  inject('api', factories)
}
