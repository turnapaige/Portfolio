export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-teal-500 hover:bg-teal-600 text-white focus:ring-teal-500 hover:shadow-lg hover:shadow-teal-500/25',
    secondary: 'bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white focus:ring-teal-500',
    outline: 'border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white focus:ring-teal-500 hover:shadow-lg hover:shadow-teal-500/25',
    ghost: 'hover:bg-teal-50 dark:hover:bg-teal-950/30 text-neutral-700 dark:text-neutral-300 focus:ring-teal-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
