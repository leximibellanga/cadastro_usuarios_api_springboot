export default function Footer() {
  return (
    <footer className="absolute grid place-items-center bottom-0 w-full h-20 bg-slate-900">
      <p className="text-slate-500 text-sm">
        &copy;{new Date().getFullYear()} Todos direitos reservados. Desenvolvido
        por{" "}
        <strong>
          <a
            href="https://github.com/leximibellanga"
            target="_blank"
            className="hover:text-slate-600 hover:underline"
          >
            Leximibel Langa
          </a>
        </strong>
      </p>
    </footer>
  );
}
