public with sharing class SiteShineChecklistController {
    public class ChecklistConfigDTO {
        @AuraEnabled public String downloadUrl;
    }

    @AuraEnabled(cacheable=true)
    public static ChecklistConfigDTO getChecklistResource() {
        String targetDeveloperName = 'Site_Shine_Checklist_PDF';

        ContentVersion version = [
            SELECT Id
            FROM ContentVersion
            WHERE ContentDocument.DeveloperName = :targetDeveloperName
            ORDER BY VersionNumber DESC
            LIMIT 1
        ];

        ChecklistConfigDTO dto = new ChecklistConfigDTO();
        dto.downloadUrl = URL.getOrgDomainUrl().toExternalForm()
            + '/sfc/servlet.shepherd/document/download/' + version.Id;
        return dto;
    }
}
