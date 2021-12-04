import { FieldErrorMapper } from './field-error-mapper.service';

describe('FieldErrorMapperService', () => {
  function createService(): FieldErrorMapper {
    return new FieldErrorMapper();
  }

  it('should be created', () => {
    expect(createService()).toBeTruthy();
  });

  it('should lookup message', () => {
    expect(createService().lookup('equals')).toEqual('应该等于<span class="text-muted field-error-expected">( <%= requiredValue %> )</span>');
    expect(createService().lookup('equals', { 'equals': '不等' })).toEqual('不等');
  });
});
