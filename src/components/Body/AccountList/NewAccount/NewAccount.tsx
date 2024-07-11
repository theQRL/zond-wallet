import { Button } from "@/components/UI/button";
import { ROUTES } from "@/router/router";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export const NewAccount = () => {
  return (
    <Link to={ROUTES.NEW_ACCOUNT}>
      <Button className="flex w-full gap-2">
        <Wallet size="18" /> Add new account
      </Button>
    </Link>
  );
};
