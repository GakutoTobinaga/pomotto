'use client';
import SupabaseLogo from './logos/SupabaseLogo';
import NextLogo from './logos/NextLogo';
import VercelLogo from './logos/VercelLogo';
import Link from 'next/link';

export default function Footer({}: {}) {
  return (
    <div className="shadow-sm bg-green-200/50 border border-green-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex items-center space-x-4">
            <div className="text-lg font-semibold">Powered By</div>
            <NextLogo />
            <SupabaseLogo />
            <VercelLogo />
            <div className="text-lg font-semibold">Developed By</div>
            <div className="text-lg font-semibold">
              <Link href="https://github.com/GakutoTobinaga">
                <div className="text-blue-600 underline hover:text-blue-800">
                  Gakuto Tobinaga
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
