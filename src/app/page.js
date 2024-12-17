import Image from "next/image";
import Homepage from "@/components/homepage";
import MyProjects from "@/components/myproject";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <Homepage />
      <MyProjects />
      <Footer/>
    </main>
  );
}
