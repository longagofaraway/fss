rutoken.errorCodes = rutoken.plugin.errorCodes;
rutoken.errorDescription = [];
rutoken.errorDescription[rutoken.errorCodes.UNKNOWN_ERROR] = "Неизвестная ошибка";
rutoken.errorDescription[rutoken.errorCodes.BAD_PARAMS] = "Неправильные параметры";
rutoken.errorDescription[rutoken.errorCodes.NOT_ENOUGH_MEMORY] = "Недостаточно памяти";

rutoken.errorDescription[rutoken.errorCodes.DEVICE_NOT_FOUND] = "Устройство не найдено";
rutoken.errorDescription[rutoken.errorCodes.DEVICE_ERROR] = "Ошибка устройства";
rutoken.errorDescription[rutoken.errorCodes.TOKEN_INVALID] = "Ошибка чтения/записи устройства. Возможно, устройство было извлечено. Попробуйте выполнить enumerate";

rutoken.errorDescription[rutoken.errorCodes.CERTIFICATE_CATEGORY_BAD] = "Недопустимый тип сертификата";
rutoken.errorDescription[rutoken.errorCodes.CERTIFICATE_EXISTS] = "Сертификат уже существует на устройстве";
rutoken.errorDescription[rutoken.errorCodes.CERTIFICATE_NOT_FOUND] = "Сертификат не найден";
rutoken.errorDescription[rutoken.errorCodes.CERTIFICATE_HASH_NOT_UNIQUE] = "Хэш сертификата не уникален";
rutoken.errorDescription[rutoken.errorCodes.CA_CERTIFICATES_NOT_FOUND] = "Корневые сертификаты не найдены";
rutoken.errorDescription[rutoken.errorCodes.CERTIFICATE_VERIFICATION_ERROR] = "Ошибка проверки сертификата";

rutoken.errorDescription[rutoken.errorCodes.PKCS11_LOAD_FAILED] = "Не удалось загрузить PKCS#11 библиотеку";

rutoken.errorDescription[rutoken.errorCodes.PIN_LENGTH_INVALID] = "Некорректная длина PIN-кода";
rutoken.errorDescription[rutoken.errorCodes.PIN_INCORRECT] = "Некорректный PIN-код";
rutoken.errorDescription[rutoken.errorCodes.PIN_LOCKED] = "PIN-код заблокирован";
rutoken.errorDescription[rutoken.errorCodes.PIN_CHANGED] = "PIN-код был изменен";
rutoken.errorDescription[rutoken.errorCodes.SESSION_INVALID] = "Состояние токена изменилось";
rutoken.errorDescription[rutoken.errorCodes.USER_NOT_LOGGED_IN] = "Выполните вход на устройство";
rutoken.errorDescription[rutoken.errorCodes.ALREADY_LOGGED_IN] = "Вход на устройство уже был выполнен";

rutoken.errorDescription[rutoken.errorCodes.ATTRIBUTE_READ_ONLY] = "Свойство не может быть изменено";
rutoken.errorDescription[rutoken.errorCodes.KEY_NOT_FOUND] = "Соответствующая сертификату ключевая пара не найдена";
rutoken.errorDescription[rutoken.errorCodes.KEY_ID_NOT_UNIQUE] = "Идентификатор ключевой пары не уникален";
rutoken.errorDescription[rutoken.errorCodes.CEK_NOT_AUTHENTIC] = "Выбран неправильный ключ";
rutoken.errorDescription[rutoken.errorCodes.KEY_LABEL_NOT_UNIQUE] = "Метка ключевой пары не уникальна";
rutoken.errorDescription[rutoken.errorCodes.WRONG_KEY_TYPE] = "Неправильный тип ключа";
rutoken.errorDescription[rutoken.errorCodes.LICENCE_READ_ONLY] = "Лицензия доступна только для чтения";

rutoken.errorDescription[rutoken.errorCodes.DATA_INVALID] = "Неверные данные";
rutoken.errorDescription[rutoken.errorCodes.UNSUPPORTED_BY_TOKEN] = "Операция не поддерживается токеном";
rutoken.errorDescription[rutoken.errorCodes.KEY_FUNCTION_NOT_PERMITTED] = "Операция запрещена для данного типа ключа";

rutoken.errorDescription[rutoken.errorCodes.BASE64_DECODE_FAILED] = "Ошибка декодирования даных из BASE64";
rutoken.errorDescription[rutoken.errorCodes.PEM_ERROR] = "Ошибка разбора PEM";
rutoken.errorDescription[rutoken.errorCodes.ASN1_ERROR] = "Ошибка декодирования ASN1 структуры";

rutoken.errorDescription[rutoken.errorCodes.FUNCTION_REJECTED] = "Операция отклонена пользователем";
rutoken.errorDescription[rutoken.errorCodes.FUNCTION_FAILED] = "Невозможно выполнить операцию";
rutoken.errorDescription[rutoken.errorCodes.MECHANISM_INVALID] = "Указан неправильный механизм";
rutoken.errorDescription[rutoken.errorCodes.ATTRIBUTE_VALUE_INVALID] = "Передан неверный атрибут";

rutoken.errorDescription[rutoken.errorCodes.X509_UNABLE_TO_GET_ISSUER_CERT] = "Невозможно получить сертификат подписанта";
rutoken.errorDescription[rutoken.errorCodes.X509_UNABLE_TO_GET_CRL] = "Невозможно получить CRL";
rutoken.errorDescription[rutoken.errorCodes.X509_UNABLE_TO_DECRYPT_CERT_SIGNATURE] = "Невозможно расшифровать подпись сертификата";
rutoken.errorDescription[rutoken.errorCodes.X509_UNABLE_TO_DECRYPT_CRL_SIGNATURE] = "Невозможно расшифровать подпись CRL";
rutoken.errorDescription[rutoken.errorCodes.X509_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY] = "Невозможно раскодировать открытый ключ эмитента";
rutoken.errorDescription[rutoken.errorCodes.X509_CERT_SIGNATURE_FAILURE] = "Неверная подпись сертификата";
rutoken.errorDescription[rutoken.errorCodes.X509_CRL_SIGNATURE_FAILURE] = "Неверная подпись CRL";
rutoken.errorDescription[rutoken.errorCodes.X509_CERT_NOT_YET_VALID] = "Срок действия сертификата еще не начался";
rutoken.errorDescription[rutoken.errorCodes.X509_CRL_NOT_YET_VALID] = "Срок действия CRL еще не начался";
rutoken.errorDescription[rutoken.errorCodes.X509_CERT_HAS_EXPIRED] = "Срок действия сертификата истек";
rutoken.errorDescription[rutoken.errorCodes.X509_CRL_HAS_EXPIRED] = "Срок действия CRL истек";
rutoken.errorDescription[rutoken.errorCodes.X509_ERROR_IN_CERT_NOT_BEFORE_FIELD] = "Некорректные данные в поле \"notBefore\" у сертификата";
rutoken.errorDescription[rutoken.errorCodes.X509_ERROR_IN_CERT_NOT_AFTER_FIELD] = "Некорректные данные в поле \"notAfter\" у сертификата";
rutoken.errorDescription[rutoken.errorCodes.X509_ERROR_IN_CRL_LAST_UPDATE_FIELD] = "Некорректные данные в поле \"lastUpdate\" у CRL";
rutoken.errorDescription[rutoken.errorCodes.X509_ERROR_IN_CRL_NEXT_UPDATE_FIELD] = "Некорректные данные в поле \"nextUpdate\" у CRL";
rutoken.errorDescription[rutoken.errorCodes.X509_OUT_OF_MEM] = "Нехватает памяти";
rutoken.errorDescription[rutoken.errorCodes.X509_DEPTH_ZERO_SELF_SIGNED_CERT] = "Недоверенный самоподписанный сертификат";
rutoken.errorDescription[rutoken.errorCodes.X509_SELF_SIGNED_CERT_IN_CHAIN] = "В цепочке обнаружен недоверенный самоподписанный сертификат";
rutoken.errorDescription[rutoken.errorCodes.X509_UNABLE_TO_GET_ISSUER_CERT_LOCALLY] = "Невозможно получить локальный сертификат подписанта";
rutoken.errorDescription[rutoken.errorCodes.X509_UNABLE_TO_VERIFY_LEAF_SIGNATURE] = "Невозможно проверить первый сертификат";
rutoken.errorDescription[rutoken.errorCodes.X509_CERT_CHAIN_TOO_LONG] = "Слишком длинная цепочка сертификатов";
rutoken.errorDescription[rutoken.errorCodes.X509_CERT_REVOKED] = "Сертификат отозван";
rutoken.errorDescription[rutoken.errorCodes.X509_INVALID_CA] = "Неверный корневой сертификат";
rutoken.errorDescription[rutoken.errorCodes.X509_INVALID_NON_CA] = "Неверный некорневой сертфикат, помеченный как корневой";
rutoken.errorDescription[rutoken.errorCodes.X509_PATH_LENGTH_EXCEEDED] = "Превышена длина пути";
rutoken.errorDescription[rutoken.errorCodes.X509_PROXY_PATH_LENGTH_EXCEEDED] = "Превышина длина пути прокси";
rutoken.errorDescription[rutoken.errorCodes.X509_PROXY_CERTIFICATES_NOT_ALLOWED] = "Проксирующие сертификаты недопустимы";
rutoken.errorDescription[rutoken.errorCodes.X509_INVALID_PURPOSE] = "Неподдерживаемое назначение сертификата";
rutoken.errorDescription[rutoken.errorCodes.X509_CERT_UNTRUSTED] = "Недоверенный сертификат";
rutoken.errorDescription[rutoken.errorCodes.X509_CERT_REJECTED] = "Сертифкат отклонен";
rutoken.errorDescription[rutoken.errorCodes.X509_APPLICATION_VERIFICATION] = "Ошибка проверки приложения";
rutoken.errorDescription[rutoken.errorCodes.X509_SUBJECT_ISSUER_MISMATCH] = "Несовпадения субьекта и эмитента";
rutoken.errorDescription[rutoken.errorCodes.X509_AKID_SKID_MISMATCH] = "Несовпадение идентификатора ключа у субьекта и доверенного центра";
rutoken.errorDescription[rutoken.errorCodes.X509_AKID_ISSUER_SERIAL_MISMATCH] = "Несовпадение серийного номера субьекта и доверенного центра";
rutoken.errorDescription[rutoken.errorCodes.X509_KEYUSAGE_NO_CERTSIGN] = "Ключ не может быть использован для подписи сертификатов";
rutoken.errorDescription[rutoken.errorCodes.X509_UNABLE_TO_GET_CRL_ISSUER] = "Невозможно получить CRL подписанта";
rutoken.errorDescription[rutoken.errorCodes.X509_UNHANDLED_CRITICAL_EXTENSION] = "Неподдерживаемое расширение";
rutoken.errorDescription[rutoken.errorCodes.X509_KEYUSAGE_NO_CRL_SIGN] = "Ключ не может быть использован для подписи CRL";
rutoken.errorDescription[rutoken.errorCodes.X509_KEYUSAGE_NO_DIGITAL_SIGNATURE] = "Ключ не может быть использован для цифровой подписи";
rutoken.errorDescription[rutoken.errorCodes.X509_UNHANDLED_CRITICAL_CRL_EXTENSION] = "Неподдерживаемое расширение CRL";
rutoken.errorDescription[rutoken.errorCodes.X509_INVALID_EXTENSION] = "Неверное или некорректное расширение сертификата";
rutoken.errorDescription[rutoken.errorCodes.X509_INVALID_POLICY_EXTENSION] = "Неверное или некорректное расширение политик сертификата";
rutoken.errorDescription[rutoken.errorCodes.X509_NO_EXPLICIT_POLICY] = "Явные политики отсутствуют";
rutoken.errorDescription[rutoken.errorCodes.X509_DIFFERENT_CRL_SCOPE] = "Другая область CRL";
rutoken.errorDescription[rutoken.errorCodes.X509_UNSUPPORTED_EXTENSION_FEATURE] = "Неподдерживаемое расширение возможностей";
rutoken.errorDescription[rutoken.errorCodes.X509_UNNESTED_RESOURCE] = "RFC 3779 неправильное наследование ресурсов";
rutoken.errorDescription[rutoken.errorCodes.X509_PERMITTED_VIOLATION] = "Неправильная структура сертифката";
rutoken.errorDescription[rutoken.errorCodes.X509_EXCLUDED_VIOLATION] = "Неправильная структура сертфиката";
rutoken.errorDescription[rutoken.errorCodes.X509_SUBTREE_MINMAX] = "Неправильная структура сертифката";
rutoken.errorDescription[rutoken.errorCodes.X509_UNSUPPORTED_CONSTRAINT_TYPE] = "Неправильная структура сертфиката";
rutoken.errorDescription[rutoken.errorCodes.X509_UNSUPPORTED_CONSTRAINT_SYNTAX] = "Неправильная структура сертифката";
rutoken.errorDescription[rutoken.errorCodes.X509_UNSUPPORTED_NAME_SYNTAX] = "Неправильная структура сертфиката";
rutoken.errorDescription[rutoken.errorCodes.X509_CRL_PATH_VALIDATION_ERROR] = "Неправильный путь CRL";

rutoken.errorDescription[rutoken.errorCodes.CMS_CERTIFICATE_ALREADY_PRESENT] = "Сертификат уже используется";
rutoken.errorDescription[rutoken.errorCodes.CANT_HARDWARE_VERIFY_CMS] = "Проверка множественной подписи с вычислением хеша на устройстве не поддерживается";