import Container from "@/components/ui/container";
import { TicTacToe } from "./tic-tac-toe";

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