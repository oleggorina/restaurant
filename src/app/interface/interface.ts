export interface IProduct {
  id: number;
  price: number;
  title: string;
  descr: string;
  image: string;
}

export interface ITestimonialCard {
  name: string;
  city: string;
  image: string;
  testimonial: string;
}

export interface IPopularDishes {
  title: string;
  price: number;
  image: string;
  descr: string;
}
