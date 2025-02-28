import Link from "next/link";
import { Button } from "./ui/button";

const ViewWorkButton = () => {
  return (
    <Button className="bg-white rounded-xl border  text-black hover:bg-white hover:text-black px-4 py-2">
      <Link href="/work">View our work</Link>
    </Button>
  );
};

export default ViewWorkButton;
