import { useQuery } from "@tanstack/react-query";
import { ConfirmEmail } from "../Services/confirmEmail";

export const useConfirmEmail = (Email: string) => {
  const query = useQuery({
    queryKey: ["confirmEmail", Email],
    queryFn: () => ConfirmEmail(Email),
    enabled: false,
  });

  return query;
};