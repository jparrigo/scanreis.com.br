import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (options.once !== false) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || '0px 0px -40px 0px',
      }
    )

    // Observe the element itself and all children with reveal classes
    const revealElements = element.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    if (element.classList.contains('reveal') ||
        element.classList.contains('reveal-left') ||
        element.classList.contains('reveal-right') ||
        element.classList.contains('reveal-scale')) {
      observer.observe(element)
    }
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.once])

  return ref
}

export function useRevealOnMount() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
