import Button from "~/components/molecules/Button";
import type { Route } from "./+types/home";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trackman Coding Challenge" },
    {
      name: "description",
      content: "Welcome to my Trackman Coding Challenge!",
    },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 m-auto items-center justify-center h-80 text-secondary-text">
      <h1 className="text-2xl font-bold">
        Please go to the Facilities page to see my coding task
      </h1>
      <Button
        variant="primary"
        text="To Facilities"
        onClick={() => navigate("/facilities")}
      />
    </div>
  );
}
