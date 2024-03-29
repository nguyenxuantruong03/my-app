import { auth } from '@clerk/nextjs';
import { PrismaClient } from '@prisma/client';

import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function POST(req: Request) {
    const body = await req.json();
    const { coin,rotation  } = body;

    try {
      const { userId } = auth();
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
      const Coin = await prisma.wheelSpin.create({
        data: {
            coin,
            rotation,
            authenticationId: userId
        },
      });
      await prisma.wheelSpin.update({
        where: { id: Coin.id },
        data: { rotation },
      });
  
      return NextResponse.json(Coin);
    } catch (error) {
      console.error("Error creating comment:", error);
      return new NextResponse("Internal error", { status: 500 });
    }
}

export async function GET(req: Request) {
  
    try {
       const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    const coins = await prisma.wheelSpin.findMany({
      where: {
        authenticationId: userId,
      },
    });
      // Return the sum of all coins
      const totalCoins = coins.reduce((total:any, coin:any) => total + parseInt(coin.coin.split(" ")[0]), 0);
      const latestRotation = coins.reduce((total:any,coin:any) =>total + (coin.rotation),0)
      return NextResponse.json({ totalCoins,latestRotation });
    } catch (error) {
      console.error('Error fetching comments:', error);
      return new NextResponse('Internal error', { status: 500 });
    }
}
//--------------Delete xóa tất cả bao gôm rotation và coin --------------------------------

// export async function DELETE(req: Request) {
//   try {
//     await prisma.wheelSpin.deleteMany();  // Delete all wheel spins
//     return new NextResponse('Total coins reset successfully', { status: 200 });
//   } catch (error) {
//     console.error('Error resetting total coins:', error);
//     return new NextResponse('Internal error', { status: 500 });
//   }
// }

//--------------Delete xóa coins --------------------------------
// export async function DELETE(req: Request) {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return new NextResponse('Unauthenticated', { status: 403 });
//     }

//     // Find the specific wheelSpin record for the authenticated user
//     const existingWheelSpin = await prisma.wheelSpin.findFirst({
//       where: {
//         authenticationId: userId,
//       },
//     });

//     if (!existingWheelSpin) {
//       return new NextResponse('No wheelSpin record found for the user', { status: 404 });
//     }

//     // Update only the 'coin' field to 0
//     await prisma.wheelSpin.update({
//       where: { id: existingWheelSpin.id },
//       data: { coin: "0" },
//     });

//     return new NextResponse('Coin reset successfully', { status: 200 });
//   } catch (error) {
//     console.error('Error resetting coin:', error);
//     return new NextResponse('Internal error', { status: 500 });
//   }
// }