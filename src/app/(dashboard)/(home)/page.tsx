import { PageBreadcrumb } from "@/widgets/breadcrumb/page-breadcrumb";

const breadcrumbItems = [{ label: "홈" }];

export default function HomePage() {
  return (
    <main className="p-4 space-y-4 flex flex-1 flex-col">
      <PageBreadcrumb items={breadcrumbItems} />
    </main>
  );
}
