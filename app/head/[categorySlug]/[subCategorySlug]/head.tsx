import { fetchSubCategory } from '#/lib/get-categories';
import { DefaultTags } from '#/ui/default-tags';

export default async function Head({
  params,
}: {
  params: { categorySlug: string; subCategorySlug: string };
}) {
  const category = await fetchSubCategory(
    params.categorySlug,
    params.subCategorySlug,
  );

  const title = `${category?.name} | Next.js App Directory`;
  const description = `The best fictional ${category?.name} money can buy.`;

  return (
    <>
      <DefaultTags />
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
