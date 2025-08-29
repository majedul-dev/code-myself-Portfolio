"use client";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
