import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const body = await req.json();
    const { rating, comment, commenter,nameproduct  } = body;

    try {
      const newComment = await prisma.comment.create({
        data: {
          rating,
          comment,
          commenter,
          nameproduct
        },
      });
      return NextResponse.json(newComment);
    } catch (error) {
      console.error('Error creating comment:', error);
      return new NextResponse("Internal error", { status: 500 });
    }
}


export async function GET(req: Request) {
  try {
    const comments = await prisma.comment.findMany();
    return NextResponse.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
