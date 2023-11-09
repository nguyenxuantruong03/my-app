import Container from "@/components/ui/container";
import { TicTacToe } from "./tic-tac-toe";
export const revalidate =86400

const TicToe = () => {
    return ( 
        <main className="mt-32">
            <Container>
            <TicTacToe />
            </Container> 
        </main>
    );
}
 
export default TicToe;