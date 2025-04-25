import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDTO } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDTO[] = [
    {
      "id": 1,
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "rating": 4.5
    },
    {
      "id": 2,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "rating": 4.2
    },
    {
      "id": 3,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "rating": 4.8
    },
    {
      "id": 4,
      "title": "Dune",
      "author": "Frank Herbert",
      "rating": 4.7
    },
    {
      "id": 5,
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "rating": 4.9
    }
  ]

  create(createBookDto: CreateBookDto) {
    const newBook : BookDTO = {
      ...createBookDto,
      id: this.books.length +1,
    }
    this.books.push(newBook)
    return newBook
  }

  findAll() {
    return this.books
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
