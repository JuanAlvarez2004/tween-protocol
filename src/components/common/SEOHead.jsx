import { useEffect } from 'react'

const SEOHead = ({ 
  title = "Tween Protocol® | Digital Studio for Exceptional Web Experiences",
  description = "Digital studio specializing in creating exceptional web experiences. We transform ideas into digital reality with minimalist, functional design and interactive animations.",
  keywords = "web development, digital studio, web design, interactive animations, GSAP, React, front-end development, UX/UI design",
  canonical = "https://tweenprotocol.com/",
  ogImage = "https://tweenprotocol.com/images/og-image.jpg",
  ogType = "website"
}) => {
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', description)
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) metaKeywords.setAttribute('content', keywords)
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) canonicalLink.setAttribute('href', canonical)
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', description)
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonical)
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]')
    if (ogImageMeta) ogImageMeta.setAttribute('content', ogImage)
    
    const ogTypeMeta = document.querySelector('meta[property="og:type"]')
    if (ogTypeMeta) ogTypeMeta.setAttribute('content', ogType)
    
    // Update Twitter Card meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', title)
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) twitterDescription.setAttribute('content', description)
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    if (twitterImage) twitterImage.setAttribute('content', ogImage)
    
  }, [title, description, keywords, canonical, ogImage, ogType])
  
  return null // This component doesn't render anything
}

export default SEOHead