export function dateSerialize(value: unknown): Date | null {
  // Valid string values from server side:
  // 2016-02-02
  // 2016-02-02T00:13:22Z
  // 2016-02-02T00:13:22.000Z
  if (
    typeof value === 'string' &&
    /^(\d{4})-(\d{2})-(\d{2})(T((\d{2}):(\d{2}):(\d{2}))(\.(\d{1,3}))?Z)?$/.test(
      value,
    )
  ) {
    return new Date(value);
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    return new Date(value);
  }

  if (!(value instanceof Date)) {
    return null;
  }

  if (Number.isNaN(value.getTime())) {
    return null;
  }

  return value;
}
