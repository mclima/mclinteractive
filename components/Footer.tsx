export default function Footer() {
  return (
    <footer className="text-black py-20 px-4 border-t border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-4xl font-bold mb-2 font-[family-name:var(--font-quicksand)]">
              MCL<span className="text-black">.</span>
            </h3>
            <p className="text-gray-600 text-sm uppercase tracking-widest">
              AI Integration & Development
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Portfolios</h4>
            <div className="space-y-2">
               <a 
                href="https://www.mariaclima.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-black hover:text-gray-700 transition-colors font-bold"
              >
                AI Projects →
              </a>
              <a 
                href="https://mariaclima.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-black hover:text-gray-700 transition-colors font-bold"
              >
                Web Development →
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:maria@mclinteractive.com"
                className="block text-black hover:text-gray-700 transition-colors font-bold"
              >
                maria@mclinteractive.com
              </a>
              <a 
                href="tel:202-630-9487"
                className="block text-black hover:text-gray-700 transition-colors font-bold"
              >
                202-630-9487
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 tracking-widest">
            © {new Date().getFullYear()} MCL Interactive
          </p>
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            US Remote
          </p>
        </div>
      </div>
    </footer>
  );
}
