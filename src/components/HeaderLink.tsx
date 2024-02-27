function HeaderLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href}
      className="text-slate-900 dark:text-slate-100 hover:text-rose-600 dark:hover:text-rose-400"
    >
      {children}
    </a>

  )
}
export default HeaderLink

