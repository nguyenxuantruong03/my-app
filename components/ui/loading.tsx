import "./style.css";
import Container from "@/components/ui/container";
const LoadingPageComponent = () => {
  return (
    <Container>
      <div className="flex flex-col items-center mt-36 mb-8">
        <p className="text text-5xl font-semibold mb-3">
          <span className="letter letter1">L</span>
          <span className="letter letter2">o</span>
          <span className="letter letter3">a</span>
          <span className="letter letter4">d</span>
          <span className="letter letter5">i</span>
          <span className="letter letter6">n</span>
          <span className="letter letter7">g</span>
          <span className="letter letter8">.</span>
          <span className="letter letter9">.</span>
          <span className="letter letter10">.</span>
        </p>
        <div className="opacity-50 mb-8">
          Dữ liệu đang được kết nạp hãy đợi trong vài giây.
        </div>
        <div className="flex items-center justify-center p-1">
		<svg className="pll" width="60" height="60" viewBox="0 0 240 240">
            <circle
              className="pl__ring pl__ring--a"
              cx="120"
              cy="120"
              r="105"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 660"
              stroke-dashoffset="-330"
              stroke-linecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--b"
              cx="120"
              cy="120"
              r="35"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 220"
              stroke-dashoffset="-110"
              stroke-linecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--c"
              cx="85"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 440"
              stroke-linecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--d"
              cx="155"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 440"
              stroke-linecap="round"
            ></circle>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default LoadingPageComponent;
