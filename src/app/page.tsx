import File from "./components/file_input";
import Form from "./components/form";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
      <File />
    </main>
  );
}
