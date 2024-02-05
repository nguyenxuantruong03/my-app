// /api/comments/router.ts
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

    const commentById = await prisma.comment.findFirst({
      where: {
        authenticationId: userId
      }
    });

   

    if (!commentById) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    await prisma.responseComment.deleteMany({
      where: {
        commentId: id,
      },
    });


    const comment = await prisma.comment.delete({
      where: {
        id: id
      }
    });
  
    return NextResponse.json(comment);
  } catch (error) {
    console.log('[COMMENT_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function PATCH(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { id, rating, comment } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const existingComment = await prisma.comment.findFirst({
      where: {
        id: id,
        authenticationId: userId,
      },
    });

    if (!existingComment) {
      return new NextResponse("Comment not found or unauthorized", { status: 403 });
    }

    const updatedComment = await prisma.comment.update({
      where: {
        id: id,
      },
      data: {
        rating: rating ?? existingComment.rating,
        comment: comment ?? existingComment.comment,
      },
    });

    return NextResponse.json(updatedComment);
  } catch (error) {
    console.error('[COMMENT_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}


export async function GET(req: any) {
  try {
    const responseComment = await prisma.comment.findMany({
      include: {
        responsecomment: true,
      },
    });
    return NextResponse.json(responseComment);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

