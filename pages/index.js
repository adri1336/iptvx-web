import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import '@/utils/i18n';

export default () => {
	const router = useRouter();
	const { t, i18n } = useTranslation();
	const languages = Object.keys(i18n.services.resourceStore.data);

	const setLanguage = (language) => {
		i18n.changeLanguage(language);	
	};

	return <div className="page-container">
		<div className="page">
			<div className="d-flex flex-column align-items-center m-50">
				<span className="title-big fw-bold text-center">IPTVX</span>
				<span className="text-medium fw-bold text-center">{ t('DESCRIPTION') }</span>
				{
					languages && languages.length > 1 &&
					<div className="d-flex flex-row">
					{ languages.map((language, index) => <span className="text-small text-center cursor-pointer m-10" key={index} onClick={ () => setLanguage(language) }>{ language }</span>) }
					</div>
				}
			</div>
			
			<div className="row">
				<div className="col m-50">
					<div className="d-flex flex-column align-items-center">
						<span className="title-small fw-bold text-center">{ t('FEATURES_TITLE') }</span>
						<ul>
							{
								t('FEATURES', { returnObjects: true }).map((feature, index) => {
									return <li className="text-small text-center" key={index}>{feature}</li>;
								})
							}
						</ul>
					</div>
				</div>

				<div className="col m-50">
					<div className="d-flex flex-column align-items-center">
						<span className="title-small fw-bold text-center">{ t('PLATFORMS_TITLE') }</span>
						<div className="row">
						{
							t('PLATFORMS', { returnObjects: true }).map((feature, index) => {
								return <div key={ index } className='col m-30'><Link href={ feature.URL } target="_blank"><div className="d-flex flex-column align-items-center cursor-pointer">
									<div style={{ position: 'relative', width: '120px', height: '120px' }}>
										<Image src={ feature.ICON } alt={ feature.NAME } fill style={{ objectFit: 'cover' }}/>
									</div>
									<div className="d-flex justify-content-center">
										<span className="text-center text-small">{ feature.NAME }</span>
									</div>
								</div></Link></div>
							})
						}
						</div>
					</div>
				</div>

				<div className="col m-50">
					<div className="d-flex flex-column align-items-center">
						<span className="title-small fw-bold text-center">{ t('OPEN_SOURCE') }</span>
						<ul>
							{
								t('OPEN_SOURCE_LINKS', { returnObjects: true }).map((link, index) => {
									return <Link href={ link.URL } target="_blank">
										<li className="text-small text-center cursor-pointer" key={index}>
											{ link.NAME }
										</li>
									</Link>;
								})
							}
						</ul>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col m-50">
					<div className="d-flex flex-column align-items-center">
						<span className="title-small fw-bold text-center">{ t('CONTACT_TITLE') }</span>
						<ul>
							{
								t('CONTACT', { returnObjects: true }).map((contact, index) => {
									return <Link href={ contact.URL } target="_blank">
										<li className="text-small text-center cursor-pointer" key={index}>
											{ `${ contact.NAME }: ${ contact.URL }` }
										</li>
									</Link>;
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="footer">
		{
			t('FOOTER', { returnObjects: true }).map((message, index) => {
				return <span className="text-small text-center" key={index}>{ message }</span>;
			})
		}
		</div>
	</div>;
};