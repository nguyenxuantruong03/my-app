// pages/api/comments/[id]/responses.ts

import { PrismaClient } from '@prisma/client';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req:Request, { params }: { params?: { commentId?: string } }) {
    const body = await req.json();
    const { description,commenter,imageUrl  } = body;
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }
    const existingComment = await prisma.comment.findFirst({
      where: {
        authenticationId: userId,
      },
    });

    if (!existingComment) {
      return new NextResponse('Comment not found or unauthorized', { status: 403 });
    }
    const newResponse = await prisma.responseComment.create({
      data: {
        commenter,
        imageUrl,
        description,
        comment: {
          connect: { id: params?.commentId }, 
        },
      },
    });

    return NextResponse.json(newResponse);
  } catch (error) {
    console.error('[RESPONSE_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
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

    // const commentById = await prisma.comment.findFirst({
    //   where: {
    //     authenticationId: userId
    //   }
    // });

    // if (!commentById) {
    //   return new NextResponse("Unauthorized", { status: 405 });
    // }

    const comment = await prisma.responseComment.delete({
      where: {
        id: id
      }
    });
  
    return NextResponse.json(comment);
  } catch (error) {
    console.log('[COMMENTREPONSE_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function PATCH(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { id, description } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    // const existingComment = await prisma.comment.findFirst({
    //   where: {
    //     id: id,
    //     authenticationId: userId,
    //   },
    // });

    // if (!existingComment) {
    //   return new NextResponse("Comment not found or unauthorized", { status: 403 });
    // }

    const updatedComment = await prisma.responseComment.update({
      where: {
        id: id,
      },
      data: {
        description: description,
        // description: description ?? existingComment.comment,

      },
    });

    return NextResponse.json(updatedComment);
  } catch (error) {
    console.error('[COMMENTREPONSE_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}


export async function GET(req: any, { params }: { params?: { commentId?: string } }) {
  try {

    const responseComment = await prisma.responseComment.findMany({
      where: {
        commentId: params?.commentId,
      },
    });

    return NextResponse.json(responseComment);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

