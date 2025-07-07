import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import bgImg from "../assets/bg1.jpg";
import { H1, Large, Lead } from "@/components/Typography";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <img
        className="absolute top-0 left-0 w-screen h-screen object-cover opacity-5"
        src={bgImg}
        alt="background"
      />
      <Card className="z-4 w-[600px] h-[400px] flex items-center pt-12 ">
        <CardHeader className="w-[500px] flex flex-col items-center">
          <div className="pb-3 relative">
            <FaGithub fill="white" size={110} />
          </div>
          <CardTitle>
            <H1>AI PR Reviewer</H1>
          </CardTitle>
          <CardDescription>
            <Lead className="flex items-center gap-3">
              Speed up your PR reviews with AI
              <FaRobot size={17} />
            </Lead>
          </CardDescription>
          <CardFooter className="mt-10 flex items-center">
            <Button size="lg" variant="default">
              <FaGithub size={243} />
              <Large>Continue with GitHub</Large>
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};

export default LandingPage;
