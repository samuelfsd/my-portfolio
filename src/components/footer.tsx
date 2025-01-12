export function Footer() {
  return (
    <footer className="h-28 flex flex-col items-center sticky top-[100vh]">
      <hr className="dark:border-gray-700 lg:my-8 w-full my-6 border-gray-200" />
      <aside>
        <p className="bold text-xs text-center">
          Copyright © {new Date().getFullYear()} - Todos os direitos reservados
          por Samuel Medeiros
        </p>
      </aside>
    </footer>
  );
}
