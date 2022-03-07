const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const regexOnlyText = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const regexPhoneNumber = /[0-9]/;
const regexOnlyNumber = /[0-9]/;
const regexPhone = /^[0-9]{10,11}$/;
const regexCpf = /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;
const regexCpfCnpj = /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/;
const regexCnpj = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

module.exports = {
  regexName,
  regexOnlyText,
  regexOnlyNumber,
  regexPhone,
  regexCpf,
  regexCnpj,
  regexCpfCnpj,
  regexPhoneNumber,
};
