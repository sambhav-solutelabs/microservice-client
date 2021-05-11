import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async create(product) {
    const createProduct = this.productRepository.create(product);
    return this.productRepository.save(createProduct);
  }

  async findAll() {
    return this.productRepository.find();
  }
}
