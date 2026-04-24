// components/Hero.js
import { Play } from "lucide-react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div
     className="position-relative text-white heroContainer"
     
    >
      <div
      className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"
      
      />

      <Container
        className="d-flex flex-column justify-content-center align-items-center text-center h-100 position-relative"
       
      >
        <h1 className="display-3 fw-bold">The Generics</h1>

        <Button variant="outline-info" className="mt-3 px-4 py-2">
          Get our Latest Album
        </Button>

       <div
  className="playBtn d-flex align-items-center justify-content-center mt-3"
>
  <Play size={24} />
</div>
      </Container>
    </div>
  );
};

export default Hero;