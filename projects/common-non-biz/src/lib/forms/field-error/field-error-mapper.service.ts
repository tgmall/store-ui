import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FieldErrorMapper {
  lookup(key: string, customMessages: { [key: string]: string } = {}): string {
    const message = customMessages[key];
    if (message) {
      return message;
    }
    switch (key) {
      case 'minlength':
        return '不能短于<span class="text-muted field-error-actual"><%= requiredLength %></span>个字符，实际<span class="text-muted field-error-expected"><%= actualLength %></span>个字符';
      case 'maxlength':
        return '不能长于<span class="text-muted field-error-actual"><%= requiredLength %></span>个字符，实际<span class="text-muted field-error-expected"><%= actualLength %></span>个字符';
      case 'minValue':
        return '不能小于<span class="text-muted field-error-expected">( <%= min %> )</span>';
      case 'maxValue':
        return '不能大于<span class="text-muted field-error-expected">( <%= max %> )</span>';
      case 'pattern':
        return '应该满足正则表达式<span class="text-muted field-error-expected"><%= requiredPattern %></span>';
      case 'equals':
        return '应该等于<span class="text-muted field-error-expected">( <%= requiredValue %> )</span>';
      case 'required':
        return '不能为空';
      case 'requiredTrue':
        return '必须为真值';
      case 'email':
        return '必须为有效的邮件地址';
      case 'url':
        return '必须为有效的 URL';
      case 'unique':
        return '必须是唯一的';
      case 'boolean':
        return '必须是布尔值';
      case 'number':
        return '必须为数字';
      case 'integer':
        return '必须为整数';
      case 'date':
        return '必须为日期';
      case 'complexity':
        return '密码强度不够，需要<span class="text-muted field-error-expected"><%= requiredValue %></span>种字符，实际只有<span class="text-muted field-error-actual"><%= actualValue %></span>种';
      case 'sameAs':
        return '必须与<span class="text-muted field-error-expected">( <%= field %> )的值相同</span>';
      default:
        return '<%= key %> - ( <%= JSON.stringify(value) %> )';
    }
  }
}
