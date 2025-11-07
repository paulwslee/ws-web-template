import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <div className="animate-in zoom-in-95 duration-500 bg-white p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-semibold mb-2">Zoom In!</h2>
            <p className="text-gray-500">살짝 확대되며 나타나는 효과입니다.</p>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <Button className="animate-in slide-in-from-bottom-5 fade-in-0">
            🚀 부드럽게 등장하는 버튼
          </Button>
        </div>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{' '}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{' '}
            or the{' '}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{' '}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
        <h1>Hello</h1>
        <Button /> {/* ← 이렇게 사용하면 경고 사라짐 */}
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-500 to-purple-600 text-white">
          <h1 className="text-4xl font-bold">🎉 Tailwind v4 적용 완료!</h1>
          <p className="mt-4 text-lg opacity-80">This page is styled with Tailwind CSS 4.</p>
        </div>
        <div className="min-h-screen flex items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-xl">shadcn/ui 설치 완료 ✨</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="홍길동" />
              </div>

              <div className="space-y-2">
                <Label>카테고리</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">옵션 A</SelectItem>
                    <SelectItem value="b">옵션 B</SelectItem>
                    <SelectItem value="c">옵션 C</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button>기본 버튼</Button>
                <Button variant="outline">아웃라인</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="h-screen flex items-center justify-center">
          <Button className="animate-in slide-in-from-bottom fade-in-0">
            부드럽게 등장하는 버튼
          </Button>
        </div>
        <div className="h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-in fade-in-0 slide-in-from-bottom-5 p-8 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-2 text-center">🎉 Tailwind Animate Test</h1>
            <p className="text-gray-600 text-center">아래에서 위로 슬라이드하며 페이드인!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
// Completed Initialize
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
