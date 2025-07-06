package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;
    public BookRepository getBookRepository() {
        return bookRepository;
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public BookService(){
        System.out.println("Book service class created");
    }

    public BookService(BookRepository bookRepository) {
        System.out.println("Book service class created");
        this.bookRepository = bookRepository;
        System.out.println("Injected book repository into bookservice class");
    }
    public void info(){
        System.out.println("Book repository name: "+bookRepository.getName());
    }
}
