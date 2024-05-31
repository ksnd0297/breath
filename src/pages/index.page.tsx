import {Divider} from "antd";
import Foreign from "./components/Foreign";
import Money from "./components/Money";
import {useState} from "react";
import {QueryClient, dehydrate, hydrate} from "@tanstack/react-query";

export default function Home() {
  const [count, setCount] = useState(0);
  const [money, setMoney] = useState(0);

  return (
    <>
      <Money money={money} setMoney={setMoney} count={count} setCount={setCount} />
      <Divider />
      <Foreign money={money} />
      <Divider />
    </>
  );
}

// export const getServerSideProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["Foregin"],
//     queryFn: () =>
//       fetch("api").then((res) => {
//         return res.json();
//       }),
//   });

//   return {
//     props: {
//       dehydrateState: dehydrate(queryClient),
//     },
//   };
// };
