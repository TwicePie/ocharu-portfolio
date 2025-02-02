import Image from "next/image";
import Homepage from "@/components/homepage";
import MyProjects from "@/components/myproject";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Social from "@/components/social";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full overflow-y-hidden">
      <Header/>
      <Homepage />
      <MyProjects />
      <Social />
      <Footer/>
    </main>
  );
}
