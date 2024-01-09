import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | undefined> => {
  const res = await fetch(`${URL}/${id}`);
  try {
    return res.json();
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return undefined;
  }
};

export default getBillboard;
