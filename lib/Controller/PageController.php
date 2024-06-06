<?php

declare(strict_types=1);

namespace OCA\Cristal\Controller;

use OCA\Cristal\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\FrontpageRoute;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\Attribute\OpenAPI;
use OCP\AppFramework\Http\TemplateResponse;
use Psr\Log\LoggerInterface;

/**
 * @psalm-suppress UnusedClass
 */
class PageController extends Controller
{

    private LoggerInterface $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    #[NoCSRFRequired]
    #[NoAdminRequired]
    #[OpenAPI(OpenAPI::SCOPE_IGNORE)]
    #[FrontpageRoute(verb: 'GET', url: '/')]
    public function index(): TemplateResponse
    {
        $response = new TemplateResponse(
            Application::APP_ID,
            'index',
        );

        // TODO: allow for the configuration of this domain.
        $cspURL = "https://cristal.demo.xwiki.com/xwiki/";

        // TODO: minimize this list of allowances.
        $csp = $response->getContentSecurityPolicy();
        $csp->addAllowedScriptDomain($cspURL);
        $csp->addAllowedStyleDomain($cspURL);
        $csp->addAllowedFontDomain($cspURL);
        $csp->addAllowedImageDomain($cspURL);
        $csp->addAllowedConnectDomain($cspURL);
        $csp->addAllowedMediaDomain($cspURL);
        $csp->addAllowedObjectDomain($cspURL);
        $csp->addAllowedFrameDomain($cspURL);
//        $csp->addAllowedChildSrcDomain($cspURL);

        $response->setContentSecurityPolicy($csp);
        return $response;
    }
}
