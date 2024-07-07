import Footer from "@/components/navigation/Footer";
import NavBar from "@/components/navigation/NavBar";

export default function BlogLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="flex-grow w-full">{children}</div>
      <Footer />
    </div>
  )
}
