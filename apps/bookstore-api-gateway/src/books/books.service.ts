import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private booksClient: ClientProxy){}
  
  create(createBookDto: CreateBookDto) {
    return this.booksClient.send('books.create',{})
  }

  findAll() {
    return this.booksClient.send('books.findAll',{})
  }

  findOne(id: number) {
    return this.booksClient.send('books.findOne',{})
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send('books.update',{})
  }

  remove(id: number) {
    return this.booksClient.send('books.remove',{})
  }
}
