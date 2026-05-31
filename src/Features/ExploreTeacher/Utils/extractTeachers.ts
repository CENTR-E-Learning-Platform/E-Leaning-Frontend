type ApiBody = {
  data?: unknown;
};

const isTeacherObject = (value: unknown): value is Record<string, unknown> => {
  return (
    value != null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    ("teacherName" in value || "teacherId" in value || "id" in value)
  );
};

export const extractTeachersList = (axiosResponse: { data?: unknown } | undefined): unknown[] => {
  const body = axiosResponse?.data as ApiBody | unknown[] | undefined;
  if (!body) return [];

  if (Array.isArray(body)) return body;

  const payload = (body as ApiBody).data;
  if (Array.isArray(payload)) return payload;
  if (isTeacherObject(payload)) return [payload];

  if (payload && typeof payload === "object" && Array.isArray((payload as ApiBody).data)) {
    return (payload as ApiBody).data as unknown[];
  }

  if (isTeacherObject(body)) return [body];

  return [];
};
