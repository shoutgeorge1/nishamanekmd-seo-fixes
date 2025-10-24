// CRITICAL FIX: Portable Text Checkbox Error
// File: components/PortableTextRenderer.tsx
// This fixes the "[@portabletext/react] Unknown block type 'checkbox'" error

import { PortableText, PortableTextComponents } from '@portabletext/react';

const portableTextComponents: PortableTextComponents = {
  types: {
    // FIX: Add checkbox renderer to handle Sanity checkbox blocks
    checkbox: ({ value }: any) => {
      return (
        <div className="flex items-start gap-3 my-2">
          <div className="flex-shrink-0 mt-1">
            <svg 
              className="w-5 h-5 text-blue-600" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
          <span className="text-gray-700 leading-relaxed">
            {value?.text || value?.label || ''}
          </span>
        </div>
      );
    },
    
    // Keep your existing block type handlers here
    image: ({ value }: any) => {
      // your existing image handler
      return (
        <img 
          src={value?.url} 
          alt={value?.alt || ''}
          className="max-w-full h-auto"
        />
      );
    },
    
    // Add other custom block types as needed
    callout: ({ value }: any) => {
      return (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
          <p className="text-blue-800">{value?.text}</p>
        </div>
      );
    }
  },
  
  // Keep your existing marks, list, etc.
  marks: {
    // Your existing mark handlers
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
  },
  
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
  },
  
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

export default function RichTextContent({ content }: { content: any }) {
  return <PortableText value={content} components={portableTextComponents} />;
}

// IMPLEMENTATION STEPS:
// 1. Find your existing PortableText component file
// 2. Replace the components object with the above
// 3. Test locally: npm run dev
// 4. Check homepage - checkbox error should be gone
// 5. Deploy to production

// ALTERNATIVE: If you don't need checkboxes, remove them from Sanity Studio:
// In schemas/book.ts or schemas/page.ts, remove:
// defineType({
//   name: 'checkbox',
//   type: 'object',
//   fields: [
//     { name: 'text', type: 'string' },
//     { name: 'checked', type: 'boolean' }
//   ]
// })
