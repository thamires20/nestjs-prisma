import { PrismaService } from "../prisma.service";
import { Bookcontroller } from "./book.controller";
import { Module } from "@nestjs/common";
import { BookService } from "./book.service";


@Module({
  controllers: [Bookcontroller],
  providers: [BookService, PrismaService ]
})
export class BookModule{}
