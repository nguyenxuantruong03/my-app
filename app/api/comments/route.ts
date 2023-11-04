import { auth } from '@clerk/nextjs';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function POST(req: Request) {
    const body = await req.json();
    const { rating, comment, commenter,nameproduct,imageUrl  } = body;
    try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }
      const newComment = await prisma.comment.create({
        data: {
          rating,
          comment,
          commenter,
          nameproduct,
          imageUrl,
          authenticationId: userId
        },
      });
      return NextResponse.json(newComment);
    } catch (error) {
      console.error('Error creating comment:', error);
      return new NextResponse("Internal error", { status: 500 });
    }
}


export async function DELETE(
  req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { id  } = body;
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const storeByUserId = await prisma.comment.findFirst({
      where: {
        authenticationId: userId
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const billboard = await prisma.comment.delete({
      where: {
        id: id
      }
    });
  
    return NextResponse.json(billboard);
  } catch (error) {
    console.log('[BILLBOARD_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function GET(req: Request) {
  try {
    const comments = await prisma.comment.findMany();
    return NextResponse.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
