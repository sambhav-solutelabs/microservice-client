import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

import { EventPattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern('product_created')
  create(product: any) {
    return this.productService.create(product);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }
}
