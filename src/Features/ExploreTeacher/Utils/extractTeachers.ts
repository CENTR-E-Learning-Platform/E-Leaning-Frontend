type ApiBody = {
  data?: unknown;
  teachers?: unknown[];
  items?: unknown[];
};

const isTeacherObject = (value: unknown): value is Record<string, unknown> => {
  return (
    value != null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    ("teacherName" in value || "teacherId" in value || "id" in value)
  );
};

export const extractTeachersList = (
  axiosResponse: { data?: unknown } | undefined
): unknown[] => {
  const body = axiosResponse?.data as ApiBody | unknown[] | undefined;
  if (!body) return [];

  if (Array.isArray(body)) return body;

  if (Array.isArray((body as ApiBody).teachers)) {
    return (body as ApiBody).teachers!;
  }

  const payload = (body as ApiBody).data as ApiBody | unknown[] | undefined;
  if (!payload) return [];

  if (Array.isArray(payload)) return payload;

  if (Array.isArray((payload as ApiBody).teachers)) {
    return (payload as ApiBody).teachers!;
  }

  if (Array.isArray((payload as ApiBody).items)) {
    return (payload as ApiBody).items!;
  }

  if (Array.isArray((payload as ApiBody).data)) {
    return (payload as ApiBody).data as unknown[];
  }

  if (isTeacherObject(payload)) return [payload];
  if (isTeacherObject(body)) return [body];

  return [];
};