import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function POST(req: Request) {
    const body = await req.json();
    const { coin,rotation  } = body;

    try {
      const Coin = await prisma.wheelSpin.create({
        data: {
            coin,
            rotation,
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
      const coins = await prisma.wheelSpin.findMany();
      // Return the sum of all coins
      const totalCoins = coins.reduce((total, coin) => total + parseInt(coin.coin.split(" ")[0]), 0);
      const latestRotation = coins.reduce((total,coin) =>total + (coin.rotation),0)
      return NextResponse.json({ totalCoins,latestRotation });
    } catch (error) {
      console.error('Error fetching comments:', error);
      return new NextResponse('Internal error', { status: 500 });
    }
}

export async function DELETE(req: Request) {
  try {
    await prisma.wheelSpin.deleteMany();  // Delete all wheel spins
    return new NextResponse('Total coins reset successfully', { status: 200 });
  } catch (error) {
    console.error('Error resetting total coins:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}